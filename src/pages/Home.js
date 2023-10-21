const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  icon: {
    fontSize: 100,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add and save your contacts</h1>
      <div style={styles.icon}>&#9742;</div>
    </div>
  );
}
