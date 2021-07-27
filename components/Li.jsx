import { memo } from 'react';

const Li = ({ content, href, className }) => (
   <li>
      <a className={className} href={href}>
         {content}
      </a>
   </li>
);

export default memo(Li);
