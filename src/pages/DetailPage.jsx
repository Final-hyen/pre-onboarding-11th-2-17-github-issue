import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../contexts/GitHubContext';

export default function DetailPage() {
  const [issue, setIssue] = useState({});
  const value = useContext(UserContext);
  const baseUrl = process.env.REACT_APP_BASEURL;
  const key = process.env.REACT_APP_KEY;
  const { issueNumber } = useParams();

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/repos/${value.owner}/${value.repo}/issues/${issueNumber}`,
        {
          headers: { Authorization: `token ${key}` },
        },
      )
      .then(res => {
        setIssue(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ul>
      <li>{issue.number}</li>
      <li>{issue.title}</li>
      <li>{issue.comments}</li>
      <li>{issue.user?.login}</li>
      <li>
        <img src={issue.user?.avatar_url} />
      </li>
      <li
        dangerouslySetInnerHTML={{
          __html: issue.body,
        }}
      />
    </ul>
  );
}
