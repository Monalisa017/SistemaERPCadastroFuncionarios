import './dadosPessoais.css';

function dadosPessoais() {

    const apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    fetch(apiUrl, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {

                var select = document.getElementById("estado");

                // Loop through the JSON data and create an option for each item
                for (var i = 0; i < data.length; i++) {
                    var option = document.createElement("option");
                    option.id = data[i].id;
                    option.name = data[i].nome;
                    option.value = data[i].id;
                    option.text = data[i].nome;
                    select.appendChild(option);
                
            }
        })
            .catch(error => {
				console.error(error);

			});

    return (
        <><div className='dadosPessoaisHeader'>
            <header className="App-header">
                <h1>Dados Pessoais</h1>
            </header>
            <body>
                <div className="formulario">
                    <form action="submit">
                        <div style={{ margin: '50px' }}>
                            <label for="fname">Nome:
                                <input type="text" id="nome" name="nome" />
                            </label>
                        </div>


                        <div style={{ margin: '50px' }}>
                            <label for="rg">RG:
                                <input type="text" id="rg" name="rg" />
                            </label>
                        </div>
                        <div style={{ margin: '50px' }}>
                            <label for="cpf">CPF:
                                <input type="text" id="cpf" name="cpf" />
                            </label>
                        </div>

                        <div style={{ margin: '50px' }}>
                            <label for="dataNascimento">Nascimento:
                                <input type="date" id="dataNascimento" name="dataNascimentoame" className='inputDate' />
                            </label>
                        </div>

                        <div style={{ margin: '50px' }}>
                            <label for="estadoCivil">Estado civil:</label>
                            <select type="select" id="estadoCivil" name="estadoCivil" />
                        </div>

                        <div style={{ margin: '50px' }}>
                            <label for="escolaridade">Escolaridade:</label>
                            <select type="select" id="escolaridade" name="escolaridade" />
                        </div>


                        <div style={{ margin: '50px', marginBottom: '150px' }}>
                            <label for="fname">Naturalidade:</label>
                            <select id="estado" onchange="buscaCidades(this.value)">
                            
                            <option>Selecione o Estado</option>
                        </select>
                        <br />
                        </div>
                        
                        <select id="cidade">
                        </select>
                    </form>
                </div>
            </body></div></>

    );
}


export default dadosPessoais;