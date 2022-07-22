import { Avatar, Grid, Tooltip } from '@nextui-org/react';
import { useCallback } from 'react';
import { Contacts } from '../schema/constant';
import { Contact } from '../schema/types';

const Styles = {
  // One more thant --nextui-zIndices-max variable (equal to 99)
  Tooltip: { zIndex: 10000 },
};

const MyContacts = () => {
  // Based on the given Contact returns a closured onClickHandler
  const getClickHandler = useCallback((contact: Contact) => {
    return () => window.open(contact.raw);
  }, []);

  return (
    <Grid.Container justify="space-evenly">
      {Contacts.map(c => (
        <Tooltip hideArrow content={c.name} css={Styles.Tooltip}>
          <Avatar
            size="xl"
            onClick={getClickHandler(c)}
            icon={<c.icon color="white" />}
          />
        </Tooltip>
      ))}
    </Grid.Container>
  );
};

export default MyContacts;
