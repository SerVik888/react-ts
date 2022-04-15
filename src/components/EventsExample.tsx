import React, { FC, useRef, useState } from 'react'

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG')
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('DROP')
    setIsDrag(true)
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type='text' placeholder='управляемый' />
      <input ref={inputRef} type='text' placeholder='неуправляемый' />
      <button onClick={clickHandler}>Показать</button>
      <div onDrag={dragHandler} draggable style={{ height: 200, width: 200, background: 'red' }}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ height: 200, width: 200, marginTop: '10px', background: isDrag ? 'blue' : 'red' }}
      ></div>
    </div>
  )
}
