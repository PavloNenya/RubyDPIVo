# frozen_string_literal: true
ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    div class: "blank_slate_container", id: "dashboard_default_message" do
      span class: "blank_slate" do
        span I18n.t("active_admin.dashboard_welcome.welcome")
        small I18n.t("active_admin.dashboard_welcome.call_to_action")
      end
    end

    # columns do
    #   column do
    #     panel "Products" do
    #       ul do
    #         Product.all.map do |p|
    #           tr
    #           td p.id
    #           td p.name
    #           td p.gender_id
    #           td p.producer_id
    #           td p.category_id
    #           td p.description
    #         end
    #       end
    #     end
    #   end
    # end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content
end
