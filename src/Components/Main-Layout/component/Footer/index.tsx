import React from 'react';
import { Grid, Typography } from '@mui/material'
import colors from '../../../../Assets/theme/base/colors';
import logo from '../../../../Assets/images/logo.svg'
import { Link } from 'react-router-dom';
import Whatsapp from '../../../../Assets/images/WhatsApp.png'
import Telegram from '../../../../Assets/images/Telegram.png'
import Instagram from '../../../../Assets/images/Instagram.png'
import MIconButton from "../../../../CustomMui/MiconButton";
import Arrow from '../../../../Assets/images/Vector 6.svg'
const Footer = () => {
    return (
        <Grid item container lg={12}  bgcolor={colors.kaarnas.main} >
            <Grid item container lg={12}>
                <Grid item container lg={2} mt={{ lg: 2 }} justifyContent={"center"}>
                    <Link to='/'>
                        <img src={logo} alt='logo' about='logo for website' style={{ marginRight: '20px' }} />
                    </Link>
                </Grid>
            </Grid>

            <Grid item container justifyContent={'space-evenly'} lg={12}>
                <Grid item container lg={4}  justifyContent={"center"} >
                    <Grid item container borderLeft={{lg: 3, md: 0}} borderColor={{lg: '#D6C109'}} mt={{ lg: 2 }} lg={8} xs={12} >
                        <Typography fontSize={{lg: "25px"}} ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>سایت کارناس</Typography>
                    </Grid>
                    <Grid item container lg={8} mt={{ lg: 2 }} mb={{ lg: 2 }} justifyContent={"start"} >
                        <Typography variant='caption' sx={{ textAlign: "justify", }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</Typography>
                    </Grid>
                </Grid>

                <Grid item container lg={3}  justifyContent={"end"}  >
                    {/*<Grid item container borderLeft={{lg: 3, md: 0}} ml={{lg:1}} borderColor={{lg: '#D6C109'}} mt={{ lg: 2 }} alignItems={'center'} mb={2} lg={8} xs={12} >*/}
                    {/*    <Typography fontSize={{lg: "25px"}} ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>لینک های مفید</Typography>*/}
                    {/*</Grid>*/}
                    <Grid item container borderLeft={{lg: 3, md: 0}} ml={{lg:1}} borderColor={{lg: '#D6C109'}} mt={{ lg: 2 }} lg={8} xs={12} >
                        <Typography fontSize={{lg: "25px"}} ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>لینک های مفید</Typography>
                    </Grid>
                    <Grid item container lg={8} mb={6} mt={{lg:2}} mr={{lg:0.5}} justifyContent={"space-evenly"}  flexDirection={'column'} >
                        <Grid item container  alignItems={'center'}>
                                <img src={Arrow} width={20} height={20} />
                            <Link to='/mangementpanel' style={{border:'none' , textDecoration:"none"}}>
                                <Typography  ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>پنل مدیریت تخصص </Typography>
                            </Link>
                        </Grid>

                        <Grid item container   mt={{lg:2}} alignItems={'center'}>
                            <img src={Arrow} width={20} height={20} />
                            <Link to='/category' style={{border:'none' , textDecoration:"none"}}>
                            <Typography  ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>دسته بندی ها </Typography>
                            </Link>
                        </Grid>
                        <Grid item container   mt={{lg:2}} alignItems={'center'}>
                            <img src={Arrow} width={20} height={20} />
                            <Link to='/aboute' style={{border:'none' , textDecoration:"none"}}>
                            <Typography  ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>درباره ما </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item container lg={5}  justifyContent={"end"} >
                    <Grid item container borderLeft={{lg: 3, md: 0}} borderColor={{lg: '#D6C109'}} mt={{ lg: 2 }} lg={8} xs={12} >
                        <Typography fontSize={{lg: "25px"}} ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>ارتباط با ما</Typography>
                    </Grid>
                    <Grid item container lg={8} mb={6} mt={{lg:2}} mr={{lg:0.5}} justifyContent={"space-evenly"}  flexDirection={'column'} >
                        <Grid item container  alignItems={'center'}>
                            <img src={Arrow} width={20} height={20} />
                            <Link to='/mangementpanel' style={{border:'none' , textDecoration:"none"}}>
                                <Typography  ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>پنل مدیریت تخصص </Typography>
                            </Link>
                        </Grid>
                        <Grid item container   mt={{lg:2}} alignItems={'center'}>
                            <img src={Arrow} width={20} height={20} />
                            <Link to='/category' style={{border:'none' , textDecoration:"none"}}>
                                <Typography  ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>دسته بندی ها </Typography>
                            </Link>
                        </Grid>
                        <Grid item container   mt={{lg:2}} alignItems={'center'}>
                            <img src={Arrow} width={20} height={20} />
                            <Link to='/aboute' style={{border:'none' , textDecoration:"none"}}>
                                <Typography  ml={{lg: 1}} alignItems={{lg: "center"}} variant={"h1"}>درباره ما </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <hr style={{ display: 'flex', width: '94%' }} />
            </Grid>

            <Grid item container lg={12} p={2}  justifyContent={'center'} >
                <Grid item container lg={3} justifyContent={'space-evenly'}>
                    <a href={''} target={'_blank'}>
                    <MIconButton>
                        <img src={Whatsapp} width={25} height={25}  />
                    </MIconButton>
                    </a>

                    <a href={''} target={'_blank'}>
                    <MIconButton>
                        <img src={Telegram}  width={25} height={25} />
                    </MIconButton>
                    </a>

                    <a href={''} target={'_blank'}>
                        <MIconButton>
                            <img src={Instagram} width={25} height={25}  />
                        </MIconButton>
                    </a>

                </Grid>

            </Grid>
        </Grid>

    )
}
export default Footer