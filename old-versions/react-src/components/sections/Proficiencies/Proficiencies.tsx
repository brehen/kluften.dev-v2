import SectionWrapper from '@components/sections/SectionWrapper'

const Proficiencies = () => {
  return (
    <SectionWrapper id="profs" yOffset={-50} className="md:mt-[150px]">
      <div className="prose prose-h2:text-accent-alt prose-h2:font-fancy w-full">
        <h2>Technical Proficiencies</h2>
        <div className="flex text-xl">
          <ul className="list-none p-0 m-0">
            {profs.map((prof, i) => {
              return (
                <li key={i} className="p-0">
                  <strong>{prof.heading}: </strong>
                  <i>{prof.subHeading}</i>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}

const profs = [
  {
    heading: 'Programming languages',
    subHeading: 'JavaScript/TypeScript, Elixir',
  },
  {
    heading: 'Frameworks',
    subHeading: 'React, NextJS, Gatsby, Svelte, Phoenix',
  },
  {
    heading: 'State management',
    subHeading: 'React-Query, Zustand, Redux',
  },
  {
    heading: 'Test frameworks',
    subHeading: 'Jest, RTL, Cypress',
  },
  {
    heading: 'Web debug tools',
    subHeading: 'Chrome debugger, Node debugger, React devtools',
  },
  {
    heading: 'Web services',
    subHeading: 'REST, GraphQL',
  },
]

export default Proficiencies
