export interface GameProps {
  difficulty?: number;
  onClickLite?: () => void;
  onClickMiddle?: () => void;
  onClickHard?: () => void;
  onClickStartGame?: () => void;
  onClickSelectOptions?: () => void;
}
