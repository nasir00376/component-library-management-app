interface RoundedButtonProps {
  children: React.ReactNode; // Specify the type of children
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({ children }) => (
  <button  style={{
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
  }}>{children}</button>
);
