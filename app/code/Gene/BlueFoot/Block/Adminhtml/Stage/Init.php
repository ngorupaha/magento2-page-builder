<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Gene\BlueFoot\Block\Adminhtml\Stage;

use Magento\Framework\UrlInterface;

/**
 * Class Init
 */
class Init extends \Magento\Backend\Block\Template
{
    /**
     * @var \Magento\Framework\UrlInterface
     */
    protected $urlBuilder;

    /**
     * @var \Gene\BlueFoot\Model\Stage\Config
     */
    protected $stageConfig;

    /**
     * @var \Magento\Framework\Url
     */
    private $frontendUrlBuilder;

    /**
     * Init constructor.
     *
     * @param \Magento\Backend\Block\Template\Context $context
     * @param \Gene\BlueFoot\Model\Stage\Config       $stageConfig
     * @param array                                   $data
     */
    public function __construct(
        \Magento\Backend\Block\Template\Context $context,
        \Gene\BlueFoot\Model\Stage\Config $stageConfig,
        \Magento\Framework\Url $frontendUrlBuilder,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->urlBuilder = $context->getUrlBuilder();
        $this->frontendUrlBuilder = $frontendUrlBuilder;
        $this->stageConfig = $stageConfig;
    }

    /**
     * Return the initial configuration
     *
     * @return string
     */
    public function getConfig()
    {
        $config = new \Magento\Framework\DataObject();
        $config->addData([
            'form_key'                         => $this->formKey->getFormKey(),
            'init_button_class'                => '.init-gene-bluefoot',
            'media_url'                        =>
                $this->urlBuilder->getBaseUrl(['_type' => UrlInterface::URL_TYPE_MEDIA]),
            'preview_url'                      => $this->frontendUrlBuilder->getUrl('bluefoot/contenttype/preview'),
            'columns'                          => 6,

            /* Define the different column options to be given in the UI */
            'column_definitions'               => [
                [
                    'label' => '1 (100%)',
                    'breakpoint' => '1',
                    'className' => 'bluefoot-structure-wrapper-width-whole',
                    'displayed' => true
                ],
                [
                    'label' => '1/2 (50%)',
                    'breakpoint' => '0.500',
                    'className' => 'bluefoot-structure-wrapper-width-half',
                    'displayed' => true
                ],
                [
                    'label' => '1/3 (33%)',
                    'breakpoint' => '0.333',
                    'className' => 'bluefoot-structure-wrapper-width-third',
                    'displayed' => true
                ],
                [
                    'label' => '1/4 (25%)',
                    'breakpoint' => '0.250',
                    'className' => 'bluefoot-structure-wrapper-width-quarter',
                    'displayed' => true
                ],
                [
                    'label' => '1/6 (16.7%)',
                    'breakpoint' => '0.167',
                    'className' => 'bluefoot-structure-wrapper-width-sixth',
                    'displayed' => true
                ],

                /* Hidden columns, but required for other sizes */
                [
                    'label' => '2/3 (66%)',
                    'breakpoint' => '0.666',
                    'className' => 'bluefoot-structure-wrapper-width-two-thirds',
                    'displayed' => false
                ],
                [
                    'label' => '3/4 (75%)',
                    'breakpoint' => '0.750',
                    'className' => 'bluefoot-structure-wrapper-width-three-quarters',
                    'displayed' => false
                ],
                [
                    'label' => '5/6 (82.5%)',
                    'breakpoint' => '0.825',
                    'className' => 'bluefoot-structure-wrapper-width-five-sixths',
                    'displayed' => false
                ]
            ]
        ]);

        // Add in the panels configuration
        $config->addData($this->stageConfig->getConfig());

        return $config->toJson();
    }
}
