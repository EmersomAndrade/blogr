import logoImg from '../assets/images/logo.svg';
import designDesktopImg from '../assets/images/illustration-editor-desktop.svg';
import laptopImg from '../assets/images/illustration-laptop-desktop.svg';
import phonesImg from '../assets/images/illustration-phones.svg';
import expandLessImg from '../assets/images/expand_less_white_24dp.svg';
import expandMoreImg from '../assets/images/expand_more_white_24dp.svg';


import '../styles/home.scss';
import { Button } from '../components/Button';

export function Home() {
    return (
        <div className="page-home">
            <header>
                <div className="menu-login">
                    <div className="logo-nav">
                        <img src={logoImg} alt="" />
                        <nav>
                            <div className="dropdown">
                                <Button className='dropbtn'>
                                    Product
                                    <img src={expandMoreImg} alt="expand more" />
                                </Button>
                                <div className="dropdown-content">
                                    <a href="#"> Overview</a>
                                    <a href="#">Pricing</a>
                                    <a href="#">Marketplace</a>
                                    <a href="#">Features</a>
                                    <a href="#"> Integrations</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <Button className='dropbtn'>
                                    Company
                                    <img src={expandMoreImg} alt="expand more" />
                                </Button>

                                <div className="dropdown-content">
                                    <a href="#">About</a>
                                    <a href="#">Team</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Careers</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <Button className='dropbtn'>
                                    Connect
                                    <img src={expandMoreImg} alt="expand more" />
                                </Button>
                                <div className="dropdown-content">
                                    <a href="#">Contact</a>
                                    <a href="#">Newsletter</a>
                                    <a href="#">LinkedIn</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <nav>
                        <Button>
                            Login
                        </Button>
                        <Button isBg>
                            Sign Up
                        </Button>
                    </nav>

                </div>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <nav className='nav-botton'>
                    <Button isBg>
                        Start For Free
                    </Button>
                    <Button isBorder>
                        learn more
                    </Button>
                </nav>
            </header>
            <h1 className='h1-future'> Designed for the future </h1>
            <div className="design-future">
                <div className="conteudo">
                    <div className="paragrafo">
                        <h2>Introducing an extensible editor</h2>
                        <p>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                            change the looks of a blog.
                        </p>
                    </div>
                    <div className="paragrafo paragrafo2">
                        <h2>  Robust content management</h2>
                        <p>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                        </p>
                    </div>
                </div>

                <div className="img-design">
                    <img src={designDesktopImg} alt="Design Desktop" />
                </div>
            </div>
            <div className="div-img">
                <img src={phonesImg} alt="phones" />
            </div>
            <div className="divphones">

                <div className="conteudo-phones">
                    <h1>
                        State of the Art Infrastructure
                    </h1>
                    <p>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </div>



            <div className="div-desktop">
                <div className="divdesktop-img">
                    <img src={laptopImg} alt="laptop" />
                </div>
                <div className="laptop-conteudo">
                    <h1>
                        Free, open, simple
                    </h1>
                    <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                    <h1>
                        Powerful tooling
                    </h1>
                    <p>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                    </p>
                </div>

            </div>

            <footer>
                <div className="logo-footer">
                    <img src={logoImg} alt="" />
                </div>
                <div className="menu-footer">
                    <Button className='product-btn'>Product</Button>
                    <Button>Overview</Button>
                    <Button>Pricing</Button>
                    <Button>Marketplace</Button>
                    <Button>Features</Button>
                    <Button>Integrations</Button>
                </div>
                <div className="menu-footer">
                    <Button className='company-btn'>Company</Button>
                    <Button>About</Button>
                    <Button>Team</Button>
                    <Button>Blog</Button>
                    <Button>Careers</Button>
                </div>
                <div className="menu-footer">
                    <Button className='product-btn'>Connect</Button>
                    <Button>Contact</Button>
                    <Button>Newsletter</Button>
                    <Button>LinkedIn</Button>
                </div>
            </footer>
        </div>
    )

}