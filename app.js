var input = d3.select('input');
var preview = d3.select('.preview');

d3.select('#new-note')
  .on('input', function() {
    preview.classed('hide', false)
      .text(input.property('value'));
  })
  .on('submit', function() {
    d3.event.preventDefault();
    d3.select('#notes')
      .append('p')
      .classed('note', true)
      .text(input.property('value'));
    input.property('value', '');
    preview.classed('hide', true)
      .text('');
  });
