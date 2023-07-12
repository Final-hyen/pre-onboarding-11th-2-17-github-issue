import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import UserContext from '../contexts/GitHubContext';

export default function GetPage() {
  const [issues, setIssues] = useState([]);
  const baseUrl = process.env.REACT_APP_BASEURL;
  const key = process.env.REACT_APP_KEY;

  const value = useContext(UserContext);
  useEffect(() => {
    axios
      .get(`${baseUrl}/repos/${value.owner}/${value.repo}/issues`, {
        headers: { Authorization: `token ${key}` },
      })
      .then(res => {
        setIssues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {issues.map(issue => {
        return (
          <Link to={`/detail/${issue.number}`} key={issue.id}>
            <ul>
              <li>{issue.number}</li>
              <li>{issue.title}</li>
              <li>{issue.user.login}</li>
              <li>{issue.created_at}</li>
              <li>{issue.comments}</li>
            </ul>
            <hr />
          </Link>
        );
      })}
    </>
  );
}
