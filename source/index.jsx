import React from 'react';

const size = 0.25;

const styles = {
  banner: {
    margin: '1em 0'
  },
  logo: {
    width: 1024 * size + 'px',
    height: 1024 * size + 'px',
    position: 'relative',
    /* eslint no-reserved-keys: 0 */
    float: 'left'
  },
  xcat: {
    width: 1024 * size + 'px',
    height: 1024 * size + 'px'
  },
  react: {
    animation: 'spin 1s linear infinite',
    width: 512 * size + 'px',
    height: 512 * size + 'px',
    position: 'absolute',
    left: 256 * size + 'px'
  },
  title: {
    marginLeft: 1024 * size + 'px',
    padding: '1em 0 1em 1em'
  },
  h2: {
    fontWeight: 'normal',
    fontSize: '2.5em',
    margin: 0
  },
  clear: {
    clear: 'both'
  }
};

const css = `
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

class Index extends React.Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: css }}/>
        <div style={styles.banner}>
          <div style={styles.logo}>
            <img src="xcat.svg" style={styles.xcat}/>
            <img src="react.svg" style={styles.react}/>
          </div>
          <div style={styles.title}>
            <h2 style={styles.h2}>Use React to generate your awesome static website</h2>
          </div>
          <div style={styles.clear}/>
        </div>
      </div>
    );
  }
}

Index.frontMatter = {
  title: ''
};

export default Index;
