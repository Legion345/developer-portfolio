import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./Contact";

// Mock sonner so we can assert which toast was shown without a real Toaster.
const toastSuccess = vi.fn();
const toastError = vi.fn();
vi.mock("sonner", () => ({
  toast: {
    success: (msg: string) => toastSuccess(msg),
    error: (msg: string) => toastError(msg),
  },
}));

async function fillForm() {
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText("Name"), "Acme Corp");
  await user.type(screen.getByPlaceholderText("Email"), "client@acme.com");
  await user.type(
    screen.getByPlaceholderText(/tell me about your project/i),
    "We need a portfolio site.",
  );
  return user;
}

describe("Contact form", () => {
  beforeEach(() => {
    toastSuccess.mockClear();
    toastError.mockClear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("submits the message to Web3Forms and confirms success", async () => {
    render(<Contact />);
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const user = await fillForm();
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(options.method).toBe("POST");

    const body = options.body as FormData;
    expect(body.get("access_key")).toBe("367321bc-36ca-4774-a1bd-a6814af56e19");
    expect(body.get("name")).toBe("Acme Corp");
    expect(body.get("email")).toBe("client@acme.com");
    expect(body.get("message")).toBe("We need a portfolio site.");

    await waitFor(() => expect(toastSuccess).toHaveBeenCalledTimes(1));
    // Form clears after a successful send.
    expect(screen.getByPlaceholderText("Name")).toHaveValue("");
  });

  it("shows an error toast when the submission fails", async () => {
    render(<Contact />);
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ success: false, message: "Spam detected" }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const user = await fillForm();
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(toastError).toHaveBeenCalledTimes(1));
    expect(toastSuccess).not.toHaveBeenCalled();
  });

  it("shows an error toast when the network request throws", async () => {
    render(<Contact />);
    const fetchMock = vi.fn().mockRejectedValue(new Error("Network down"));
    vi.stubGlobal("fetch", fetchMock);
    // Silence the expected console.error from the catch block.
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    const user = await fillForm();
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(toastError).toHaveBeenCalledTimes(1));
    expect(toastSuccess).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it("disables the button and shows a sending state while in flight", async () => {
    render(<Contact />);
    let resolveFetch!: (value: unknown) => void;
    const fetchMock = vi.fn(
      () => new Promise((resolve) => {
        resolveFetch = resolve;
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const user = await fillForm();
    await user.click(screen.getByRole("button", { name: /send message/i }));

    // Request is in flight: button reflects the sending state and is disabled.
    const sendingButton = screen.getByRole("button", { name: /sending/i });
    expect(sendingButton).toBeDisabled();

    // Let it finish so the test ends cleanly.
    resolveFetch({ ok: true, json: async () => ({ success: true }) });
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /send message/i })).toBeEnabled(),
    );
  });

  it("includes a hidden honeypot field for spam protection", () => {
    const { container } = render(<Contact />);
    const honeypot = container.querySelector('input[name="botcheck"]');
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).not.toBeVisible();
  });
});
