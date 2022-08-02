

const DarkLayout = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '5 px',
        paddin: '10px',
    }}>
    <h3>Dark-Layout</h3>
    <div>
        {children}
    </div>
    </div>
  )
}

export default DarkLayout