import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../contexts/GitHubContext';
import { IssueItem, AdItem } from './IssuePage.jsx';

export default function GetPage() {
  const [issues, setIssues] = useState([]);
  const baseUrl = process.env.REACT_APP_BASEURL;
  const key = process.env.REACT_APP_KEY;

  const value = useContext(UserContext);
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/repos/${value.owner}/${value.repo}/issues?sort=comments`,
        {
          headers: { Authorization: `token ${key}` },
        },
      )
      .then(res => {
        setIssues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {issues.map((issue, i) => {
        return (
          <>
            {(i + 1) % 5 === 0 ? (
              <AdItem />
            ) : (
              <IssueItem issue={issue} key={issue.number} />
            )}
          </>
        );
      })}
    </>
  );
}
