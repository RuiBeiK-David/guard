import React from 'react';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import f5 from '../images/f5.png';
import './styles.css';

const boxItemStyles = {
  boxItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  },
  iconBox: {
    width: '100px',
    height: '100px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '10px',
    position: 'relative',
  },
  placeholderIcon: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#ccc',
  },
};

function BoxItem({ title, description, iconSrc }) {
  const icons = {
    f3,
    f4,
    f5,
  };

  return (
    <div style={boxItemStyles.boxItem}>
      <div style={{ ...boxItemStyles.iconBox, backgroundImage: `url(${icons[iconSrc] || ''})` }}>
        {/* 如果图标路径无效，可以添加一个备用的图标或占位符 */}
        {iconSrc && !icons[iconSrc] && <div style={boxItemStyles.placeholderIcon}>?</div>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BoxItem;