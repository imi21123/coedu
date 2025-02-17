import styled from '@emotion/styled';

export const Container = styled.div`
  width: 29.75rem;
  height: 46.125rem;

  border-radius: 0.9375rem;
  background: var(--bc-gray, #5a5a5a);
  box-shadow: 0px 0px 4px 0px var(--bc-background, #2b2b2b) inset;

  display: flex;
  flex-direction: column;
`;

export const ChatSection = styled.div`
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  height: 91%;
  padding: 1.06rem 1.31rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 0.63rem;
`;

export const InputSection = styled.form`
  width: 100%;
  height: 9%;

  border-radius: 0.9375rem;
  background: var(--bc-input, rgba(218, 218, 218, 0.35));
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.35);

  display: flex;

  > textarea {
    width: 100%;
    padding: 1.25rem;
    resize: none;
    scrollbar-width: none;

    border: none;
    border-radius: 0.9375rem;
    background: var(--bc-light-gray, #dadada);

    color: var(--bc-background, #2b2b2b);
    font-family: 'Pretendard';
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > svg {
    box-sizing: border-box;
    width: 15%;
    height: 100%;
    padding: 0.44rem;

    border: none;
    fill: var(--bc-gray);
  }
`;
