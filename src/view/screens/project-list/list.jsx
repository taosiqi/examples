export const List = (props) => {
  const { list, users } = props;
    return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.id}>
            <th>{item.name}</th>
            <th>{users.find((user) => user.id === item.personId)?.name || '未知'}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
