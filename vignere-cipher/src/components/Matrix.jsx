import { useState } from "react";

function Matrix() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const matrix = Array.from({ length: 26 }, (_, i) =>
    alphabet.map((char, j) => alphabet[(j + i) % 26])
  );

  const [hovered, setHovered] = useState({ row: null, col: null });

  return (
    <table style={{ marginLeft: 0, borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th></th>
          {alphabet.map((char, i) => (
            <th
              key={i}
              style={{
                width: '20px',
                height: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                background: hovered.col === i ? '#ffe082' : 'transparent'
              }}
            >
              {char}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            <th
              style={{
                width: '20px',
                height: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                background: hovered.row === i ? '#ffe082' : 'transparent'
              }}
            >
              {alphabet[i]}
            </th>
            {row.map((cell, j) => (
              <td
                key={j}
                style={{
                  border: '1px solid #ccc',
                  padding: '0',
                  width: '20px',
                  height: '20px',
                  textAlign: 'center',
                  fontFamily: 'Space Mono, Arial, Helvetica',
                  boxSizing: 'border-box',
                  background:
                    hovered.row === i || hovered.col === j
                      ? '#fff9c4'
                      : 'transparent'
                }}
                onMouseEnter={() => setHovered({ row: i, col: j })}
                onMouseLeave={() => setHovered({ row: null, col: null })}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Matrix;