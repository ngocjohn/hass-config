customElements.whenDefined('developer-tools-template').then(() => {
  const TemplatePanel = customElements.get('developer-tools-template');
  const { html, css } = TemplatePanel.prototype;

  // defined added style
  const newStyle = css`
  .content.horizontal {
    --code-mirror-max-height: calc(100vh - 410px);
    max-height: calc(var(--code-mirror-max-height) + 150px);
  }
  .content.horizontal > * {
    width: 50%;
    margin-bottom: 0px;
  }
  .rendered {
    overflow: auto;
    max-height: calc(var(--code-mirror-max-height) - 30px);
  }
  `;

  const newStyles = [].concat(TemplatePanel.styles, newStyle);
  Object.defineProperty(TemplatePanel, 'styles',        {value: newStyles, configurable: true, enumerable: false});
  Object.defineProperty(TemplatePanel, 'elementStyles', {value: newStyles, configurable: true, enumerable: false});
});