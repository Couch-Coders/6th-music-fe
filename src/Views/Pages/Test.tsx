import Form from '../Components/Common/Form';

interface lProps {
  // title: string;
  // setEmail: () => void;
  // setPassword: () => void;
  // handleAction: () => void;
  title: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleAction: (id: number) => void;
}

const Test = ({ title, setEmail, setPassword, handleAction }: lProps) => {
  return (
    <div>
      <Form
        title={title}
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={handleAction}
      />
    </div>
  );
};

export default Test;
