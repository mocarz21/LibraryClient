import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const Statute = () =>{

  return(
    <div className="statute-module">
       <DialogTitle>Regulamin Aplikacji Wspomagającej Pracę w Bibliotece</DialogTitle>
       <DialogContent>
        <ol>
          <li>
            <strong>Wprowadzenie</strong>
            <p>Aplikacja wspomagająca pracę w bibliotece umożliwia czytelnikom korzystanie z zasobów bibliotecznych, przeglądanie dostępnych książek, dodawanie ich do ulubionych oraz rezerwowanie. Dostęp do aplikacji mają zarówno pracownicy, którzy mogą zarządzać księgozbiorem, jak i czytelnicy, którzy mogą korzystać z usług biblioteki.</p>
          </li>
          <li>
            <strong>Funkcje Czytelnika</strong>
            <p>
              Czytelnik może przeglądać dostępne w bibliotece książki.<br />
              Ma możliwość dodawania książek do listy ulubionych.<br />
              Może przeglądać historię swoich wypożyczeń i oddanych książek.<br />
              Czytelnik może edytować swoje dane osobowe, w tym adres e-mail.<br />
              Nie może samodzielnie zmieniać innych danych. Zmiany takie dokonuje pracownik biblioteki.
            </p>
          </li>
          <li>
            <strong>Funkcje Pracownika</strong>
            <p>
              Pracownik ma możliwość przeglądania książek, które chce wypożyczyć czytelnik.<br />
              Może dodawać książki do wypożyczonych oraz oddać wypożyczone książki.<br />
              Pracownik zarządza danymi dotyczącymi księgozbioru i czytelników.<br />
              Nie ma możliwości zmiany danych osobowych czytelnika, poza adresem e-mail. Takie zmiany dokonuje administrator.
            </p>
          </li>
          <li>
            <strong>Funkcje Administratora</strong>
            <p>
              Administrator ma pełną kontrolę nad danymi w systemie.<br />
              Ma możliwość zarządzania danymi użytkowników, w tym zmiany wszystkich danych osobowych.<br />
              Odpowiada za nadzór nad pracownikami biblioteki.<br />
              Administrator dba o bezpieczeństwo danych i dostęp do aplikacji.
            </p>
          </li>
          <li>
            <strong>Warunki Rejestracji</strong>
            <p>
              Czytelnik, chcąc zarejestrować się w aplikacji, musi podać swoje prawdziwe dane osobowe.<br />
              Rejestracja odbywa się poprzez weryfikację danych przez pracownika na podstawie dokumentu tożsamości.<br />
              Każdy użytkownik może mieć tylko jedno konto w systemie.<br />
              Dane wprowadzone przy rejestracji nie mogą naruszać praw autorskich ani dóbr innych osób.
            </p>
          </li> 
          <li>
            <strong>Zasady Korzystania z Aplikacji</strong>
            <p>
              Użytkownik zobowiązany jest do korzystania z aplikacji zgodnie z obowiązującym prawem i regulaminem.<br />
              Zabronione jest dostarczanie treści mogących naruszać prawa innych użytkowników, w tym treści obraźliwych, nielegalnych, lub naruszających prywatność.<br />
              Użytkownik nie może przeszkadzać w funkcjonowaniu aplikacji ani zakłócać jej pracy.<br />
              Dostęp do aplikacji może być ograniczony lub zablokowany w przypadku naruszenia regulaminu.
            </p>
          </li>
          <li>
            <strong>Obowiązki Czytelnika</strong>
            <p>
              Czytelnik zobowiązany jest do rzetelnego korzystania z aplikacji.<br />
              Powinien dbać o poufność swoich danych logowania i nie udostępniać ich innym osobom.<br />
              Zgłoszenie jakichkolwiek problemów związanych z aplikacją powinno być przekazywane pracownikowi biblioteki.<br />
              Czytelnik nie może stosować jakichkolwiek działań, które mogą zaszkodzić działaniu aplikacji lub naruszyć jej zabezpieczenia.
            </p>
          </li>
          <li>
            <strong>Odpowiedzialność</strong>
            <p>
              Administrator nie ponosi odpowiedzialności za treści dostarczone przez użytkowników.<br />
              Czytelnik odpowiada za treści, które dodaje do aplikacji, oraz za swoje działania w ramach korzystania z niej.<br />
              W przypadku naruszenia regulaminu lub obowiązującego prawa, użytkownik ponosi odpowiedzialność prawna.
            </p>
          </li>
          <p>
            Niniejszy regulamin określa zasady korzystania z aplikacji wspomagającej pracę w bibliotece.<br />
            Użytkownicy są zobowiązani do przestrzegania tych zasad oraz obowiązującego prawa.<br />
            Administracja ma prawo do zmiany regulaminu, o czym będzie informować użytkowników.
          </p>     
        </ol>
      </DialogContent>
    </div>
  )
}