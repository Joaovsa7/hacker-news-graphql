import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { POST_MUTATION } from "../../graphql/mutations";

const CreateLink = () => {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  console.log(url, description);
  const handleSetUrl = ({ target }) => setUrl(target.value);
  const handleSetdescription = ({ target }) => setDescription(target.value);

  return (
    <div>
      <input type="text" value={url} onChange={handleSetUrl} />
      <input type="text" value={description} onChange={handleSetdescription} />
      <Mutation mutation={POST_MUTATION} variables={{ description, url }} onCompleted={() => {
        setUrl('');
        setDescription('');
      }}>
        {postMutation => <button onClick={postMutation}>Criar o link</button>}
      </Mutation>
    </div>
  );
};

export default CreateLink;
