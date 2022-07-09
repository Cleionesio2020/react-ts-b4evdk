import * as React from 'react';
const Home: React.FC = () => {
  const array = [1, 2, 3, 4];

  return (
    <div>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Meu repertório</h5>
          
       

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Data</th>
            <th scope="col">Musicas</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {array.map((array) => (
            <tr>
              <th scope="row">Musicas de domingo</th>
              <td>03/04/2022</td>
              <td>4</td>

              <td>
                <i className="fa-solid fa-file-pen"></i>
                {'  '}
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

export default Home;
