Компонент Modal має тільки бекграунд, модальне вікно та іконку закриття модалки. Все інше передаємо пропсами

1. В компоненті відслідковуємо, відкрита модалка, чи ні
   const [isShowModal, setIsShowModal] = useState(false);

2. Описуємо обробник відкриття-закриття модалки
   const handleClickModal = () => {
   setIsShowModal((prevState) => !prevState);
   };

3. Передаємо пропси в компонент Modal
<!-- {isShowModal && (
  <Modal
    isShowModal={isShowModal}
    onClick={handleClickModal}
    title1={{ text: t('modal.title1'), className: `${s.title}` }}
    title2={{
      text: t('modal.title2'),
      className: `${s.titleRest}`,
    }}
    subtitle={{
      text: t('modal.subtitle'),
      className: `${s.subtitle}`,
    }}
    link={{
      text: t('modal.link'),
      className: `${s.link}`,
    }}
    image={{
      src: `${IMAGES.DONE}`,
      alt: 'Done registration',
      width: '220',
      height: '150',
      className: `${s.image}`,
    }}
    icon={<ICONS.CROSS_SMALL />}
    button={
      <AuthButton
        type='button'
        text='OK'
        onClick={handleClickModal}
        size='small'
        color='blue'
        className={s.modalBtn}
      />
    }
  />
)} -->

4. Описуємо стилі для модалки в своєму компоненті
<!-- .image {
  margin-bottom: 32px;
}

.title {
width: 351px;

font-weight: var(--extrabold);
font-size: var(--title);
text-align: center;
}

.titleRest {
composes: title;
margin-bottom: 40px;

font-weight: var(--bold);
font-size: var(--subtitle);
}

.subtitle {
composes: title;
width: 292px;
margin-bottom: 56px;
font-weight: var(--bold);
font-size: var(--text-lg);
text-align: left;
}

.link {
composes: subtitle;
color: var(--accent-cl);
}

.modalBtn {
min-width: 130px;
} -->
