import { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { useAppState } from './state/AppStateContext';
import { ColumnContainer, ColumnTitle } from "./styles"

type ColumnProps = {
  text: string
  id: string
}

export const Column: FC<ColumnProps> = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState()

  const tasks = getTasksByListId(id)
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(task => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}