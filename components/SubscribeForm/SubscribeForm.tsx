import { SubscriptionIllustration } from "../illustrations";

const formFieldConfig = [
  {
    label: "email",
    type: "email",
    required: true,
    placeholder: "Your email *",
    className:
      "rounded-t-lg md:border-t-2 md:border-l-2 md:rounded-tl-lg md:rounded-tr-none",
  },
  {
    label: "company",
    type: "text",
    placeholder: "Your company name",
    className: "md:border-t-2 md:border-r-2 md:rounded-tr-lg",
  },
  {
    label: "firstName",
    type: "text",
    placeholder: "First name",
    className: "md:border-b-2 md:border-l-2 md:rounded-bl-lg",
  },
  {
    label: "lastName",
    type: "text",
    placeholder: "Last name",
    className:
      "rounded-b-lg md:border-b-2 md:border-r-2 md:rounded-br-lg md:rounded-bl-none",
  },
];

export const SubscribeForm: React.FC = () => {
  return (
    <section className="bg-brandPrimary-200 text-white flex md:flex-row flex-col-reverse mb-16 rounded-2xl p-10 md:p-20">
      <div className="grow flex flex-col gap-6">
        <h2 className="text-4xl font-semibold text-center md:text-left">
          World class ideas
          <br />
          <span className="font-serif font-thin">right in your inbox</span>
        </h2>
        <form
          className="grid grid-col-1 md:grid-cols-2 grid-rows-2 max-w-xl text-lg"
          noValidate
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
          }}
        >
          {formFieldConfig.map((field) => (
            <input
              key={field.label}
              className={`${field.className} border border-white/40 p-3 outline-none w-full bg-transparent placeholder:text-white/60 focus:border-white`}
              type={field.type}
              name={field.label}
              id={field.label}
              required={field?.required}
              placeholder={field.placeholder}
            />
          ))}
          <div className="flex justify-center md:justify-start md:col-span-2 w-full">
            <button
              type="submit"
              className="capitalize w-36 bg-white text-brandPrimary-200 rounded-lg p-3 mt-10"
            >
              subscribe
            </button>
          </div>
        </form>
        <p className="text-sm text-white text-center md:text-left">
          By filling out this form you agree to the terms and conditions in our{" "}
          <a className="font-semibold hover:underline" href="/privacy">
            Privacy Notice&nbsp;
            <sup>↗</sup>
          </a>
        </p>
      </div>
      <div className="flex items-center justify-center px-6">
        <SubscriptionIllustration />
      </div>
    </section>
  );
};
