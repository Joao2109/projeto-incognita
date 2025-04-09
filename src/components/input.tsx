import { cn } from "@/lib/utils";
interface InputGroupProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}
export const InputGroup = ({
  className,
  children,
  ...props
}: InputGroupProps) => {
  return (
    <div
      className={cn("border border-muted my-2 p-2 rounded-lg", className)}
      data-slot="input-group"
      {...props}
    >
      {children}
    </div>
  );
};
interface InputTitleProps extends React.ComponentProps<"h2"> {
  className?: string;
  children: string;
}
export const InputTitle = ({
  className,
  children,
  ...props
}: InputTitleProps) => {
  return (
    <h2
      className={cn("text-lg text-center mt-1 font-semibold", className)}
      {...props}
    >
      {children}
    </h2>
  );
};
interface InputFieldProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}
export const InputField = ({
  className,
  children,
  ...props
}: InputFieldProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-accent border border-border p-2 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
interface LabelProps extends React.ComponentProps<"label"> {
  className?: string;
  children: React.ReactNode;
}
export const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      className={cn("overflow-hidden overflow-ellipsis", className)}
      {...props}
    >
      {children}
    </label>
  );
};
export interface InputProps extends React.ComponentProps<"input"> {
  id?: string;
}
export const Input = ({ className, type, id, ...props }: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      data-slot="input"
      className={cn("", className)}
      {...props}
    />
  );
};
export interface TextareaProps extends React.ComponentProps<"textarea"> {
  id?: string;
  value?: string;
  children?: React.ReactNode;
}
export const TextArea = ({ className, value, id, ...props }: TextareaProps) => {
  return (
    <textarea
      id={id}
      className={cn("resize-none", className)}
      value={value}
      {...props}
    />
  );
};
