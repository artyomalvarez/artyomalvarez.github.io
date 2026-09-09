import { InfoCard, type InfoCardProps } from "./InfoCard";

export type ExperienceCardProps = InfoCardProps;

export const ExperienceCard = (props: ExperienceCardProps) => {
  return <InfoCard {...props} />;
};
