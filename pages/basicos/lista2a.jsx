function gerarLista() {
  const list = [
    <span>1,</span>,
    <span>2,</span>,
    <span>3,</span>,
    <span>4,</span>,
    <span>5,</span>,
    <span>6,</span>,
  ];
  return list;
}

export default function list() {
  return <div>{gerarLista()}</div>;
}
