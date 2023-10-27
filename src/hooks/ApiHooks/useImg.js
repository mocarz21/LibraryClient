import { useQuery } from "../../OdevFetch/useQuery"

export const useImg = () => {
  const { loading, payload, refetch } = useQuery({ endpoint: 'download/img' });

  const imagesMap = {};

  if (!loading) {
    payload.forEach((image) => {
      const imageName = image.name.split('.')[0]; // Usuń rozszerzenie pliku
      imagesMap[imageName] = image.url;
    });
  }
  const sendImg = async (img, imgName) =>{
    const imgNameWithoutExtension = imgName.split('.')[0]

    if (img) {
      const formData = new FormData();
      formData.append("file", img);

      try {
        const response = await fetch(`http://localhost:8080/upload/img/${imgNameWithoutExtension}`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Plik został pomyślnie przesłany.");
          // Przeprowadź dalszą obsługę sukcesu, np. zaktualizuj stan komponentu
        } else {
          console.error("Wystąpił błąd podczas przesyłania pliku.");
          // Dodaj obsługę błędów
        }
      } catch (error) {
        console.error("Wystąpił błąd:", error);
        // Dodaj obsługę błędów sieciowych
      }
    } else {
      console.error("Nie wybrano pliku do przesłania.");
    }
  }

  return {
    loading,
    images: imagesMap,
    refetch,
    sendImg,
  };
};

