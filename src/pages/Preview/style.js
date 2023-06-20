import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.div`
  width: 100%;
  overflow-y: auto;

  main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 123px ;

    a{
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: 8px;
    }

  >.title-rating {
    display: flex;
    align-items: center;
    gap: 19px;

    margin-top: 24px  ;

    svg{
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

    >.profile-date {
      margin-top: 24px;
      display: flex;
      gap: 8px;

      .profile {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
          border-radius: 50%;
          height: 16px;
          width: 16px;
      }

      }

      .time{
        display: flex;
        align-items: center;
        gap: 8px;

        svg{
          color: ${({ theme }) => theme.COLORS.PINK};
          font-size: 16px;
        }
      
    }
  }

  .tags {
    display: flex;
    margin: 40px 0;
  }

  >section{
    p{
      text-align: justify;
    }
  }

}


`