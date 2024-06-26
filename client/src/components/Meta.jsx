import { Helmet } from 'react-helmet-async'

const Meta = ( { title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to ProKart',
    description:'One stop destination for all your needs',
    keywords: 'electronics, buy electronics, cheap electronics'
}

export default Meta
