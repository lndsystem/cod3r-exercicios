export default function list2() {
  const tamanho = [1, 2, 3, 4, 5];
  const html = tamanho.map((i) => <span key={i}>{i},</span>);

  return <div>{html}</div>;
}
