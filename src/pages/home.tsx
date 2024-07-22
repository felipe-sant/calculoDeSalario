import React from "react"

function Home() {
    const [salario, setSalario] = React.useState("0")
    const [mes, setMes] = React.useState("1")
    const [ano, setAno] = React.useState(0)

    function onChangeSalario(e: React.ChangeEvent<HTMLInputElement>) {
        setSalario(e.target.value.replace(/,/g, '.'));
    }

    function onChangeMes(e: React.ChangeEvent<HTMLSelectElement>) {
        setMes(e.target.value)
    }

    function onChangeAno(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        if (/^[0-9]*$/.test(inputValue) && inputValue.length <= 4) {
            setAno(Number(inputValue));
        }
    }

    function calcular() {
        console.log(salario, mes, ano)
    }

    return (
        <main>
            <form>
                <div>
                    <label htmlFor="salario">Salário</label>
                    <input type="number" id="salario" value={salario} onChange={onChangeSalario} />
                </div>
                <div>
                    <label htmlFor="mes">Mês</label>
                    <select name="" id="" value={mes} onChange={onChangeMes}>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ano">Ano</label>
                    <input type="text" id="ano" value={ano} onChange={onChangeAno} />
                </div>
                <input type="button" onClick={calcular} value="Calcular" />
            </form>
        </main>
    )
}

export default Home