import Formation from './Formation'

const FormationList = ({formations}) => {
  return (
    <div>
      {formations.map((formation)=>(
        <Formation key={formation.id} {...formation} />
      ))}
    </div>
  )
}

export default FormationList