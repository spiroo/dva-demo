/** ***************
  footer组件
  @author 张会明
******************/
import React from 'react';
import styles from './Footer.css';
import { footerText } from '../../utils/config.js';

function Footer() {
  return (
    <div className={styles.footer}>
      {footerText}
    </div>
  );
}

export default Footer;
