interface InternalRoundedButtonProps {
  text: string; // Specify the type of children
}
interface RoundedButtonProps {
  children: string; // Specify the type of children
}

// Let assume this button is import or exist in third party librart and it doesn't support the same props interface
// that we have integrated in our app

const InternalRoundedButton: React.FC<InternalRoundedButtonProps> = ({ text }) => (
  <button  style={{
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
  }}>{text}</button>
);

// Ensure a uniform interface

export const RoundedButton: React.FC<RoundedButtonProps> = ({ children }) => (
  <InternalRoundedButton text={children}></InternalRoundedButton>
);
