import { css } from "lit";

const styles = css`
  header {
    font-size: 2.4vw;
    font-style: bold;
    font-family: 'Beau Rivage', 'Tangerine', fantasy;
  }
  body {
      color: var(--color-text);
      background-color: var(--color-background);
      font-family: 'IBM Plex Serif', serif;
      display: flex;
      flex-direction: column;
      margin: 0;

  }
  main {
    flex: 1;
    overflow: auto;
    min-height: 80vh;
    padding-left: var(--padding-side);
  }
  footer {
    bottom: 0;        
    left: 0;         
    width: 100%;   
    text-align: center;   
    padding: var(--padding-side) 0;   
  }

  a {
      color: var(--color-text);
  }

  svg.icon {
      display: inline;
      height: var(--icon-height);
      width: var(--icon-width);
      vertical-align: top;
      fill: currentColor;
  }

  .image-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      gap: var(--grid-gap);                            
    }
    
    .image-grid a {
      display: block;
    }
    
    .image-grid img {
      width: 100%;    
      height: auto;  
      display: block; 
      object-fit: cover; 
    }

`;

export default { styles };
