export const initialData = () => {
  const data = [
    {title: 'Desenvolvimento de site', amount: 12000, type: 'entrada', category: 'Dev'},
    {title: 'Pão de Açúcar', amount: 153.64, type: 'saida', category: 'Mercado'},
  ];

  localStorage.setItem('@my-finances:transactions', JSON.stringify(data));
}