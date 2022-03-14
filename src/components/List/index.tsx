import { FC, useCallback, useState } from 'react';
import { PersonData } from "src/App";
import Card from "src/components/Card"


interface ListProps {
  data: PersonData[] | unknown[]
}
 
const List: FC<ListProps> = ({ data }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = useCallback((id) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(selectedId => selectedId !== id);
      }

      const newSelected = [...prevSelected, id];
      const uniqueSelected = [...new Set(newSelected)];

      return uniqueSelected;
    })
  }, []);

  const sortBySelected = useCallback((a, b) => {
    if (selected.includes(a.id)) {
      return -1;
    }

    if (selected.includes(b.id)) {
      return 0;
    }

    return 1;
  }, [selected]);
  return ( 
    <>
      {data.sort(sortBySelected).map((personInfo) => (
        // @ts-ignore
        <Card key={personInfo.id} data={personInfo} isSelected={selected.includes(personInfo.id)} onClick={handleClick} />
    ))}
    </>

   );
}
 
export default List;