export default function Tabs({ content, children, ButtonsCont }) {
  return (
    <>
      <ButtonsCont>{content}</ButtonsCont>
      {children}
    </>
  );
}
