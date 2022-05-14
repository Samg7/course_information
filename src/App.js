const Header = ({ course }) => <h1>{course}</h1>

// Sum all exercises of each part
const Total = ({ parts }) => {
  let sum = 0
  for (let i = 0; i < parts.length; i++) {
    sum += parts[i].exercises
  }

  return (
    <p><b>total of exercises {sum}</b></p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}     
  </>

const Course = ({course}) =>
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
      {
        name: 'const char* cStr = nullptr;',
        exercises: 4,
        id: 5
      }
    ]
  }

  return <Course course={course} />
}

export default App