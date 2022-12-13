import { v4 as uuid } from 'uuid'
import React, { useState } from 'react'
import { Container, Section, Li, Input, Button, ContainerText } from './styles.js'
import { FcInspection, FcExport } from "react-icons/fc";
function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState("")

  function getText(event) {

    setTask(event.target.value)
  }
  function addTask() {
    if (task) {
      setList([...list, { id: uuid(), task, isconcluded: false }])

    }
  }
  function finiched(id) {
    const newlist = list.map(item =>
      item.id === id ? { ...item, isconcluded: !item.isconcluded } : item
    )
    setList(newlist)
  }
  function detailed(id) {
    const newlist = list.filter(item => {
      if (item.id !== id) {
        return item
      }
    })
    setList(newlist)
  }

  return (
    <Container>
      <Section>
        <header>
          <Input onChange={getText} type="text" placeholder="Oque tem para fazer..." />
          <Button onClick={addTask}>Adicionar</Button>
        </header>
        {
          list.length > 0 ? (
            list.map(item => (
              <Li key={item.id} conclued={item.isconcluded}>
                <FcInspection className='icons' onClick={() => finiched(item.id)} />
                <ContainerText> {item.task}</ContainerText>
                <FcExport className='icons' onClick={() => detailed(item.id)} />
              </Li>
            )))
            : (
              <h1>... não á tarefa na lista ... </h1>)
        }
      </Section>
    </Container>
  )

}
export default App
