import { Helmet } from 'react-helmet';
import { Phonebook } from 'components/Phonebook/Phonebook';

export default function contacts() {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Phonebook />
    </>
  );
}
