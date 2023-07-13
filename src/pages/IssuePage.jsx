import { Link } from 'react-router-dom';

export function IssueItem({ issue }) {
  return (
    <>
      <Link to={`/${issue.number}`} key={issue.id}>
        <ul>
          <li>{issue.number}</li>
          <li>{issue.title}</li>
          <li>{issue.user.login}</li>
          <li>{issue.created_at}</li>
          <li>{issue.comments}</li>
        </ul>
        <hr />
      </Link>
    </>
  );
}

export function AdItem() {
  return (
    <>
      <a href="https://www.wanted.co.kr">
        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
      </a>
      <hr />
    </>
  );
}
