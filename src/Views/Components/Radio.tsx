import { RadioLabel, RadioWrapper, RadioInput, RadioList } from './Radio.style';

const RadioData = [
  { key: 1, title: 'LOFI', for: 'lofi', id: 'lofi', name: 'genre' },
  { key: 2, title: 'POP', for: 'pop', id: 'pop', name: 'genre' },
  { key: 3, title: 'K-POP', for: 'kpop', id: 'kpop', name: 'genre' },
  { key: 4, title: '재즈', for: 'jazz', id: 'jazz', name: 'genre' },
  { key: 5, title: '기타', for: 'else', id: 'else', name: 'genre' },
];

function Radio() {
  return (
    <RadioWrapper>
      <RadioList>
        {RadioData.map((radio) => (
          <li key={radio.key}>
            <RadioInput type="radio" id={radio.id} name={radio.name} />
            <RadioLabel htmlFor={radio.for}>{radio.title}</RadioLabel>
          </li>
        ))}
      </RadioList>
    </RadioWrapper>
  );
}

export default Radio;
