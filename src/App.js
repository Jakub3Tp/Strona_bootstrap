import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap/dist/js/bootstrap"

function App() {
  return (
    <>
      <div className="container" style={{fontFamily: "Cambria"}}>
        <header className="row" style={{textAlign: "center", backgroundColor: "#C2185B", padding: "15px", color:"white"}} >
          <div className="col-12">
            <h1>Formularz Rejestracji Konferencji <i>Nasze kwiaty</i></h1>
          </div>
        </header>

        <div className="row" style={{height: "500px"}}>
          <div className="col-12">
            <div className="row" style={{height: "300px"}}>
              <div className="col-3" style={{backgroundColor: "#FCE4EC", margin: "25px", padding: "16px", width: "25%"}}>
                <h2>Dane osobowe:</h2>
                <p><input type="name" className="form-control" id="name" placeholder="Wpisz imie"
                          style={{width: "80%", height: "30px", margin: "10px"}}/></p>
                <p><input type="surname" className="form-control" id="surname" placeholder="Wpisz Nazwisko"
                          style={{width: "80%", height: "30px", margin: "10px"}}/></p>
                <button style={{backgroundColor: "#c2185b", color: "white", marginTop: "50px",
                  marginLeft: "60%", padding: "20px", border: "none"}}>Prześlij</button>
              </div>
              <div className="col-3" style={{backgroundColor: "#FCE4EC", margin: "25px", padding: "16px", width: "25%"}}>
                <h2>Dane kontaktowe:</h2>
                <p><input type="name" className="form-control" id="name" placeholder="Twój e-mail..."
                          style={{width: "80%", height: "30px", margin: "10px"}}/></p>
                <p><input type="surname" className="form-control" id="surname" placeholder="Twój numer telefonu..."
                          style={{width: "80%", height: "30px", margin: "10px"}}/></p>
                <button style={{backgroundColor: "#c2185b", color: "white", marginTop: "50px",
                  marginLeft: "60%", padding: "20px", border: "none"}}>Prześlij</button>
              </div>
              <div className="col-3" style={{backgroundColor: "#FCE4EC", margin: "25px", padding: "16px", width: "25%"}}>
                <h2>Hasło do logowania:</h2>
                <p><input type="name" className="form-control" id="name" placeholder="Wpisz hasło"
                          style={{width: "80%", height: "30px", margin: "10px"}}/></p>
                <p><input type="surname" className="form-control" id="surname" placeholder="Wpisz ponownie hasło"
                          style={{width: "80%", height: "30px", margin: "10px"}}/></p>
                <button style={{backgroundColor: "#c2185b", color: "white", marginTop: "50px",
                  marginLeft: "60%", padding: "20px", border: "none"}}>Prześlij</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="row" style={{height: "240px", backgroundColor: "#C2185B", color: "white", padding: "15px"}}>
          <div className="col-3" style={{width: "25%"}}>
            Video
          </div>
          <div className="col-3" style={{width: "25%"}}>
            <h3>Plan Informacji</h3>
            <table>
              <tr>
                <td>
                  9:00 - 12:00 Pielęgnacja roślin
                </td>
              </tr>
              <tr>
                <td>
                13:00 - 15:00 Targi kwiatowe
                </td>
              </tr>
            </table>
          </div>
          <div className="col-3" style={{width: "25%"}}>
            <a href="http://#">Internetowa Kwiaciarnia</a>
          </div>
          <div className="col-3" style={{width: "25%"}}>
            Formularz wykonał: Uczeń Pana Mgr. Przymysława Jedlikowskiego: Jakub
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
